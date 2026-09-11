import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return resend.emails.send({
    from: "Batuta y Pincel <no-reply@bautaypincel.com>",
    to: "info@bautaypincel.com",
    subject: `Nuevo mensaje de ${data.name}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.phone}</p>
      <p><strong>Mensaje:</strong> ${data.message}</p>
    `,
  });
}

export async function sendEnrollmentEmail(data: {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: number;
  grade: string;
  service: string;
  message?: string;
}) {
  return resend.emails.send({
    from: "Batuta y Pincel <no-reply@bautaypincel.com>",
    to: "info@bautaypincel.com",
    subject: `Nueva inscripción: ${data.childName}`,
    html: `
      <h2>Nueva solicitud de inscripción</h2>
      <p><strong>Padre/Madre:</strong> ${data.parentName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.phone}</p>
      <p><strong>Nombre del niño:</strong> ${data.childName}</p>
      <p><strong>Edad:</strong> ${data.childAge} años</p>
      <p><strong>Grado:</strong> ${data.grade}</p>
      <p><strong>Servicio de interés:</strong> ${data.service}</p>
      ${data.message ? `<p><strong>Mensaje adicional:</strong> ${data.message}</p>` : ""}
    `,
  });
}

export async function sendDonationConfirmation(data: {
  donorName: string;
  donorEmail: string;
  amount: number;
}) {
  return resend.emails.send({
    from: "Batuta y Pincel <no-reply@bautaypincel.com>",
    to: data.donorEmail,
    subject: "¡Gracias por tu donación, Batuta y Pincel!",
    html: `
      <h2>¡Gracias por tu donación!</h2>
      <p>Hola ${data.donorName},</p>
      <p>Tu donación de <strong>$${data.amount.toLocaleString("es-CO")} COP</strong> ha sido recibida.</p>
      <p>Gracias a tu generosidad, un niño en Chía tendrá acceso a formación integral en arte, música y tareas.</p>
      <p>Te enviaremos un informe del impacto de tu donación próximamente.</p>
      <br/>
      <p>Con gratitud,<br/>El equipo de Batuta y Pincel</p>
    `,
  });
}
