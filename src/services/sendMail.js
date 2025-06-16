import emailjs from "emailjs-com";

const VITE_EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const VITE_EMAIL_USER_ID = import.meta.env.VITE_EMAIL_USER_ID;
const VITE_EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

export const SendMail = async (data) => {
  try {
    const response = await emailjs.send(
      VITE_EMAIL_SERVICE_ID,
      VITE_EMAIL_TEMPLATE_ID,
      {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        position: data?.position,
        company: data?.company,
        subject: `Đăng ký khóa học AI - ${data?.name}`,
      },
      VITE_EMAIL_USER_ID // public key
    );
    return {
      success: true,
      message: "Đăng ký thành công.",
      response,
    };
  } catch (error) {
    console.error("Lỗi gửi email:", error);
    return {
      success: false,
      message: "Gửi email thất bại.",
      error,
    };
  }
};
