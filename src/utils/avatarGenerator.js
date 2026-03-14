// Static boy avatar SVG
const BOY_AVATAR = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- Background -->
  <circle cx="100" cy="100" r="100" fill="#E0F2FE"/>
  
  <!-- Head -->
  <circle cx="100" cy="70" r="30" fill="#F4A460"/>
  
  <!-- Hair -->
  <path d="M 70 45 Q 70 30 100 30 Q 130 30 130 45 Z" fill="#8B4513"/>
  
  <!-- Eyes -->
  <circle cx="90" cy="65" r="4" fill="#000"/>
  <circle cx="110" cy="65" r="4" fill="#000"/>
  
  <!-- Smile -->
  <path d="M 90 78 Q 100 85 110 78" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
  
  <!-- Body -->
  <rect x="80" y="105" width="40" height="50" rx="5" fill="#2563EB"/>
  
  <!-- Arms -->
  <rect x="45" y="110" width="35" height="15" rx="7" fill="#F4A460"/>
  <rect x="120" y="110" width="35" height="15" rx="7" fill="#F4A460"/>
  
  <!-- Legs -->
  <rect x="85" y="160" width="12" height="35" fill="#333"/>
  <rect x="103" y="160" width="12" height="35" fill="#333"/>
  
  <!-- Shoes -->
  <rect x="83" y="192" width="16" height="8" rx="2" fill="#000"/>
  <rect x="101" y="192" width="16" height="8" rx="2" fill="#000"/>
</svg>`;

// Static girl avatar SVG
const GIRL_AVATAR = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <!-- Background -->
  <circle cx="100" cy="100" r="100" fill="#FCE7F3"/>
  
  <!-- Head -->
  <circle cx="100" cy="70" r="30" fill="#F4A460"/>
  
  <!-- Hair -->
  <path d="M 70 50 Q 70 30 100 30 Q 130 30 130 50 L 130 75 Q 100 85 70 75 Z" fill="#D4A574"/>
  
  <!-- Hair ribbons -->
  <circle cx="80" cy="45" r="6" fill="#EC4899"/>
  <circle cx="120" cy="45" r="6" fill="#EC4899"/>
  
  <!-- Eyes -->
  <circle cx="90" cy="65" r="4" fill="#000"/>
  <circle cx="110" cy="65" r="4" fill="#000"/>
  <circle cx="91" cy="64" r="1.5" fill="#FFF"/>
  <circle cx="111" cy="64" r="1.5" fill="#FFF"/>
  
  <!-- Smile -->
  <path d="M 90 78 Q 100 85 110 78" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
  
  <!-- Dress body -->
  <path d="M 80 105 L 70 160 Q 70 175 85 180 L 115 180 Q 130 175 130 160 L 120 105 Z" fill="#EC4899"/>
  
  <!-- Dress pattern -->
  <circle cx="90" cy="125" r="3" fill="#FFF" opacity="0.6"/>
  <circle cx="110" cy="125" r="3" fill="#FFF" opacity="0.6"/>
  <circle cx="100" cy="140" r="3" fill="#FFF" opacity="0.6"/>
  
  <!-- Arms -->
  <rect x="45" y="110" width="35" height="15" rx="7" fill="#F4A460"/>
  <rect x="120" y="110" width="35" height="15" rx="7" fill="#F4A460"/>
  
  <!-- Legs -->
  <rect x="85" y="175" width="10" height="25" fill="#F4A460"/>
  <rect x="105" y="175" width="10" height="25" fill="#F4A460"/>
  
  <!-- Shoes -->
  <rect x="83" y="198" width="14" height="7" rx="2" fill="#EC4899"/>
  <rect x="103" y="198" width="14" height="7" rx="2" fill="#EC4899"/>
</svg>`;

// Get child avatar based on gender
export const getChildAvatar = (name, gender) => {
  const avatarSvg = gender === 'girl' ? GIRL_AVATAR : BOY_AVATAR;
  return `data:image/svg+xml;base64,${btoa(avatarSvg)}`;
};
