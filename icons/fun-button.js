function findFun() {
  if (!navigator.geolocation) {
    alert("Location not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const search = "bars+clubs+live+music+comedy+nightlife";
    const url = `https://www.google.com/maps/search/${search}/@${lat},${lng},14z`;

    window.open(url, "_blank");
  });
}
