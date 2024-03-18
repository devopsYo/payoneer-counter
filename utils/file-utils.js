const getCountPatternFromFile = (filePath, pattern) => {
    try {
      let patternCount = 0;
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const contentLines = fileContent.split('\n');
        for (const line of contentLines) {
          if (line.includes(pattern))
            patternCount++;
        }
      }
      else
        fs.writeFile(filePath);
      return postRequestsCount;
    } catch (err) {
      console.error(`Error reading the file in path ${filePath}:`, err);
    } 
}