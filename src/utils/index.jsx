

export function getNavbarTitle(currentPagePathname) {
    if (currentPagePathname === "/admin") {
      return "Dashboard";
    } else if (currentPagePathname === "/admin/orders") {
      return "Confirmed Orders";
    } else if (currentPagePathname === "/admin/shipment") {
      return "Shipment";
    } else if (currentPagePathname === "/admin/shop-for-me") {
      return "Shop For Me";
    } else if (currentPagePathname === "/admin/billing") {
      return "Billing";
    } else if (currentPagePathname === "/admin/blog") {
      return "Blog";
    } else if (currentPagePathname === "/admin/refer-a-friend") {
      return "Refer a Friend";
    } else if (currentPagePathname === "/admin/get-a-quote") {
      return "Get a Quote";
    } else if (currentPagePathname === "/admin/settings") {
      return "Settings";
    } else if (currentPagePathname === "/admin/orders/requests") {
      return "Requested Orders";
    } else if (currentPagePathname === "/admin/orders/drafts") {
      return "Draft Orders";
    
    } else if (currentPagePathname === "/admin/orders/create") {
      return "Create New Orders";
    }
  }