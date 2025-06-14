const contactInfo = [
  {
    id: 1,
    // type: "phone",
    // icon: "phone", // Sử dụng string thay vì component
    href: "tel:+84931541339",
    text: "(+84) 93 154 1339",
  },
  {
    id: 2,
    // type: "email",
    // icon: "email",
    href: "mailto:info@suritechs.com",
    text: "info@suritechs.com",
  },
  {
    id: 3,
    // type: "email",
    // icon: "email",
    href: "mailto:tram@suritechs.com",
    text: "tram@suritechs.com",
  },
];

const officeLocations = [
  {
    id: 2,
    address: "Địa chỉ: 5 Nam Kỳ Khởi Nghĩa, Phường 01, TP Đà Lạt, Lâm Đồng",
  },
];
// Export để sử dụng trong component
export { contactInfo, officeLocations };

// Hoặc export default nếu muốn
export default {
  contactInfo,
  officeLocations,
};
