class RouteFlickr {
  static async get(endPoint) {
    const response = await fetch(endPoint);

    const data = await response.json();

    return data;
  }
}

export { RouteFlickr };
