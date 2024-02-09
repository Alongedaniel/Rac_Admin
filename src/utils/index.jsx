

export function getNavbarTitle(currentPagePathname) {
    if (currentPagePathname === "/") {
      return "Dashboard";
    } else if (currentPagePathname === "/users") {
      return "Users";
    } else if (currentPagePathname === "/orders") {
      return "Confirmed Orders";
    } else if (currentPagePathname === "/shipment") {
      return "Shipment";
    } else if (currentPagePathname === "/shop-for-me") {
      return "Shop For Me";
    } else if (currentPagePathname === "/payments") {
      return "Payments";
    } else if (currentPagePathname === "/blog") {
      return "Blog";
    } else if (currentPagePathname === "/refer-a-friend") {
      return "Refer a Friend";
    } else if (currentPagePathname === "/get-a-quote") {
      return "Get a Quote";
    } else if (currentPagePathname === "/settings") {
      return "Settings";
    } else if (currentPagePathname === "/orders/requests") {
      return "Requested Orders";
    } else if (currentPagePathname === "/orders/drafts") {
      return "Draft Orders";
    } else if (currentPagePathname === "/orders/create") {
      return "Create New Orders";
    } else if (currentPagePathname === "/orders/orderID") {
      return "Order Details";
    }
  }