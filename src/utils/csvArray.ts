export const csvArray = (csv: string) => {
  var lines = csv.split("\n")

  var result = []

  var headers = lines[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/g)

  for (var i = 1; i < lines.length; i++) {
    var obj = {}
    var currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/g)
    if (lines[i] !== "") {
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j]
      }

      result.push(obj)
    }
  }
  return result
}
