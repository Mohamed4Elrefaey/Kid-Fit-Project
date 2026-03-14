// Generate a static avatar URL for each user based on their name and gender
export const generateAvatarUrl = (name, gender) => {
  // Create a stable hash from the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  // Use absolute value and modulo to get a consistent number
  const seed = Math.abs(hash) % 1000;

  // Select avatar style based on gender
  const style = gender === 'girl' ? 'avataaars-female' : 'avataaars';

  // Return DiceBear avatar URL with seed for consistency
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${name}_${seed}&scale=80`;
};

// Alternative: Use a simple initials-based avatar generator
export const generateInitialsAvatar = (name, gender) => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Color palette for avatars
  const colors = [
    '#AD2BEE', // Purple
    '#3B82F6', // Blue
    '#22C55E', // Green
    '#F59E0B', // Amber
    '#EC4899', // Pink
    '#06B6D4', // Cyan
  ];

  // Generate consistent color based on name
  let colorIndex = 0;
  for (let i = 0; i < name.length; i++) {
    colorIndex += name.charCodeAt(i);
  }
  const color = colors[colorIndex % colors.length];

  // Create SVG data URL for initials avatar
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="100" fill="${color}"/>
    <text x="100" y="115" font-size="80" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial, sans-serif">
      ${initials}
    </text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Use DiceBear API for better avatars
export const getChildAvatar = (name, gender) => {
  return generateAvatarUrl(name, gender);
};
