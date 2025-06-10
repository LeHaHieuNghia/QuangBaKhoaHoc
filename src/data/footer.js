const contactInfo = [
  {
    id: 1,
    type: "phone",
    icon: "phone", // Sử dụng string thay vì component
    href: "tel:+84931541339",
    text: "(+84) 93 154 1339",
  },
  {
    id: 2,
    type: "email",
    icon: "email",
    href: "mailto:tram@suritechs.com",
    text: "tram@suritechs.com",
  },
  {
    id: 3,
    type: "email",
    icon: "email",
    href: "mailto:info@suritechs.com",
    text: "info@suritechs.com",
  },
];

const officeLocations = [
  {
    id: 1,
    address: "HCM: 897 Truong Sa, Ward 11, District 3, HCM, Vietnam",
  },
  {
    id: 2,
    address:
      "Branch: 5F Nam Ky Khoi Nghia, Ward 1, Dalat City, Lam Dong, Vietnam",
  },
  {
    id: 3,
    address: "Global: A81 Jaipur, Rajasthan, India",
  },
];
// Export để sử dụng trong component
export { contactInfo, officeLocations };

// Hoặc export default nếu muốn
export default {
  contactInfo,
  officeLocations,
};
