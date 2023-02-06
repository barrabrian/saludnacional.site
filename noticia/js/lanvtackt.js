function redirect() {

  if (geo_countryCode == 'ES') {
    location.href = "https://pay.laniavita.com/sda-checkout-eur?tk=XBR-SDA27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  } else if (geo_countryCode == 'CO') {
    location.href = "https://pay.laniavita.com/sda-checkout-cop?tk=XBR-SDA27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  } else if (geo_countryCode == 'MX') {
    location.href = "https://pay.laniavita.com/sda-checkout-mxn?tk=XBR-SDA27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  } else {
    location.href = "https://pay.laniavita.com/sda-checkout?tk=XBR-SDA27-" +
      utm_source + "-" + utm_campaign + "-" + utm_medium + "-" + utm_content;
  }

}
