import nodemailer from 'nodemailer';
import path from 'path';

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildEmailTemplate(params: {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  date?: string;
  eventType?: string;
  message: string;
}) {
  const fullName = escapeHtml(params.fullName);
  const email = escapeHtml(params.email);
  const phone = params.phone ? escapeHtml(params.phone) : '—';
  const subject = params.subject ? escapeHtml(params.subject) : '—';
  const date = params.date ? escapeHtml(params.date) : '—';
  const eventType = params.eventType ? escapeHtml(params.eventType) : '—';
  const message = escapeHtml(params.message).replaceAll('\n', '<br/>');

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nouveau message — Le Oui Parfait</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f1f7;font-family:Arial,Helvetica,sans-serif;color:#2b2b2b;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f1f7;padding:28px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="680" style="max-width:680px;width:100%;background:#ffffff;border:1px solid #e8e0dc;">
            <tr>
              <td style="padding:20px 22px;border-bottom:1px solid #eee;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <img src="cid:lop-logo" alt="Le Oui Parfait" style="height:26px;width:auto;display:block;" />
                    </td>
                    <td align="right" style="font-size:12px;color:#8d8d8d;letter-spacing:0.18em;text-transform:uppercase;">
                      Nouveau message
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:22px;">
                <div style="font-size:22px;line-height:1.3;color:#4B4456;font-weight:600;">
                  Demande de contact
                </div>
                <div style="margin-top:8px;font-size:14px;line-height:1.6;color:#5A5A5A;">
                  Vous avez reçu un nouveau message depuis le formulaire de contact.
                </div>

                <div style="margin-top:18px;border:1px solid #e8e0dc;background:#fbfafc;padding:16px;">
                  <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#88b7b5;">Coordonnées</div>
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:10px;font-size:14px;color:#4B4456;">
                    <tr>
                      <td style="padding:6px 0;width:160px;color:#7b7683;">Nom</td>
                      <td style="padding:6px 0;">${fullName}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;width:160px;color:#7b7683;">Email</td>
                      <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#4B4456;text-decoration:underline;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;width:160px;color:#7b7683;">Téléphone</td>
                      <td style="padding:6px 0;">${phone}</td>
                    </tr>
                  </table>
                </div>

                <div style="margin-top:14px;border:1px solid #e8e0dc;background:#ffffff;padding:16px;">
                  <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#88b7b5;">Détails</div>
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:10px;font-size:14px;color:#4B4456;">
                    <tr>
                      <td style="padding:6px 0;width:160px;color:#7b7683;">Sujet</td>
                      <td style="padding:6px 0;">${subject}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;width:160px;color:#7b7683;">Date</td>
                      <td style="padding:6px 0;">${date}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;width:160px;color:#7b7683;">Type d'événement</td>
                      <td style="padding:6px 0;">${eventType}</td>
                    </tr>
                  </table>
                </div>

                <div style="margin-top:14px;border:1px solid #e8e0dc;background:#fbfafc;padding:16px;">
                  <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#88b7b5;">Message</div>
                  <div style="margin-top:10px;font-size:14px;line-height:1.7;color:#4B4456;">${message}</div>
                </div>

                <div style="margin-top:18px;font-size:12px;line-height:1.6;color:#8d8d8d;">
                  Répondre à cet email répondra directement au client (Reply-To).
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 22px;border-top:1px solid #eee;background:#ffffff;">
                <div style="font-size:12px;color:#8d8d8d;">
                  Le Oui Parfait — Formulaire de contact
                </div>
              </td>
            </tr>
          </table>

          <div style="max-width:680px;width:100%;font-size:11px;color:#8d8d8d;margin-top:10px;">
            Cet email a été généré automatiquement.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const subject = String(body.subject || '').trim();
    const date = String(body.date || '').trim();
    const eventType = String(body.eventType || '').trim();
    const message = String(body.message || '').trim();
    const consent = Boolean(body.consent);

    if (!fullName || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Champs requis manquants.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!consent) {
      return new Response(JSON.stringify({ ok: false, error: 'Consentement requis.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.CONTACT_TO;

    if (!gmailUser || !gmailAppPassword || !to) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Configuration email manquante sur le serveur.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const html = buildEmailTemplate({
      fullName,
      email,
      phone: phone || undefined,
      subject: subject || undefined,
      date: date || undefined,
      eventType: eventType || undefined,
      message,
    });

    const logoPath = path.join(process.cwd(), 'public', 'logo-horizontal.png');

    await transporter.sendMail({
      from: `Le Oui Parfait <${gmailUser}>`,
      to,
      subject: `Nouveau message — ${subject || fullName}`,
      replyTo: email,
      html,
      attachments: [
        {
          filename: 'logo-horizontal.png',
          path: logoPath,
          cid: 'lop-logo',
        },
      ],
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Erreur serveur.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
