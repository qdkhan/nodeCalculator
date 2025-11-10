export const calculator = (req, res) => {
    res.write('<p>Here Will be Calculated<p>')
    res.write('<form action="/result" method="POST">')
    res.write('<input type="number" name="first_number" placeholder="Enter Your First Digit"><br/></br>')
    res.write('<input type="number" name="second_number" placeholder="Enter Your Second Digit"><br/><br/>')
    res.write('<button type="submit" >Sum</button>')
    res.write("</form>")
    res.write('</html>')
    res.end()
}
