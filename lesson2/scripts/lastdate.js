const date = document.lastModified;
const lastModDate = new Date(date);
document.getElementById("lastdate").innerHTML = `Last Updated: ${new Date(date)}`;
