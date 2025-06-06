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
        subject: `Đăng ký khóa học AI - ${data?.name}`,
      },
      VITE_EMAIL_USER_ID // public key
    );
    return {
      success: true,
      message: "Thông tin đã được gửi đến email.",
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
