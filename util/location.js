const API_KEY = "AIzaSyAdRndq8m3iZ6fgg3S5boKQTAbr0-9_Gks";

export function getMapPreview(lat, lng) {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&key=AIzaSyAdRndq8m3iZ6fgg3S5boKQTAbr0-9_Gks&signature=ronaldThomasAlex`;

  return imagePreviewURL;
}
