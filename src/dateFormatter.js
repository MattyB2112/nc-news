export default function dateFormatter(date) {
  var date = new Date(date);
  var thing = date.toISOString().substring(0, 16).replace("T", " ");
  var yyyy = date.toISOString().substring(0, 4);
  var mm = date.toISOString().substring(5, 7);
  var dd = date.toISOString().substring(8, 10);
  var hh = date.toISOString().substring(11, 14);
  var ms = date.toISOString().substring(14, 16);

  return " " + hh + ms + " on " + dd + "-" + mm + "-" + yyyy;
}
