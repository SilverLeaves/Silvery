let clr = new Array('00', '20', '40', '60', '80', 'a0', 'c0', 'ff');
for (i = 0; i < 8; i++) {
    document.write("<table border=0 cellpadding=8 style='border:1px solid #000000'>");
    for (j = 0; j < 8; j++) {
        document.write("<tr>");
        for (k = 0; k < 8; k++) {
            document.write('<td bgcolor="#' + clr[i] + clr[j] + clr[k] + '">');
            document.write('<tt><font color="#' + clr[7 - i] + clr[7 - j] + clr[7 - k] + '"> ');
            document.write(clr[i] + clr[j] + clr[k] + '</font></tt></td>');
        }
        document.write("</tr>");
    }
    document.write("</table><br>");
}