import nodemailer from 'nodemailer';

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || '').trim();

    if (!email) {
      return new Response(JSON.stringify({ ok: false, error: 'Email requis.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.CONTACT_TO;

    if (!gmailUser || !gmailAppPassword || !to) {
      return new Response(JSON.stringify({ ok: false, error: 'Configuration email manquante sur le serveur.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const safeEmail = escapeHtml(email);

    await transporter.sendMail({
      from: `Le Oui Parfait <${gmailUser}>`,
      to,
      subject: `Nouvel abonnement newsletter — ${email}`,
      replyTo: email,
      html: `<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#f4f1f7;font-family:Arial,Helvetica,sans-serif;color:#2b2b2b;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:28px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#ffffff;border:1px solid #e8e0dc;">
            <tr>
              <td style="padding:18px 20px;border-bottom:1px solid #eee;">
                <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#88b7b5;">Newsletter</div>
                <div style="margin-top:6px;font-size:18px;font-weight:600;color:#4B4456;">Nouvel abonnement</div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px;">
                <div style="font-size:14px;color:#5A5A5A;line-height:1.7;">Un nouvel email s'est inscrit à la newsletter :</div>
                <div style="margin-top:10px;padding:12px 14px;border:1px solid #e8e0dc;background:#fbfafc;font-size:14px;color:#4B4456;">
                  ${safeEmail}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Erreur serveur.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
