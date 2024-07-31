function findScaledRectangle(boundary, rectangle) {
    // Extract rectangle properties
    const rectX = rectangle.x;
    const rectY = rectangle.y;
    const rectWidth = rectangle.width;
    const rectHeight = rectangle.height;

    // Calculate the center of the rectangle
    const centerX = rectX + rectWidth / 2;
    const centerY = rectY + rectHeight / 2;

    // Extract boundary points
    const xs = boundary.map(point => point[0]);
    const ys = boundary.map(point => point[1]);

    // Calculate the boundaries
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    console.log({ minX, minY });
    // Calculate maximum distances to the boundary
    const maxLeftDistance = centerX - minX;
    const maxRightDistance = maxX - centerX;
    const maxTopDistance = centerY - minY;
    const maxBottomDistance = maxY - centerY;

    // Calculate scale factors based on these distances and the current dimensions
    const scaleX = Math.min(maxLeftDistance, maxRightDistance) * 2 / rectWidth;
    const scaleY = Math.min(maxTopDistance, maxBottomDistance) * 2 / rectHeight;

    // Uniform scaling factor to preserve aspect ratio
    const scaleFactor = Math.min(scaleX, scaleY);

    // Calculate new width and height
    const newWidth = rectWidth * scaleFactor;
    const newHeight = rectHeight * scaleFactor;

    // Calculate new top-left corner to maintain the center
    const newX = centerX - newWidth / 2;
    const newY = centerY - newHeight / 2;

    // Return the scaled rectangle
    return {
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight
    };
}

// Example usage:
  let boundary = [
    [0, 0],
    [887, 0],
    [887, 632],
    [2158, 632],
    [2158, 1381],
    [0, 1381],
    [0, 0]
  ];

  let rectangle = {
    x: 273,
    y: 829,
    width: 1027,
    height: 347
  };

// let boundary = [[0, 0], [887, 0], [887, 632], [2158, 632], [2158, 1381], [0, 1381], [0, 0]]
// let rectangle = { x: 299, y: 409, width: 525, height: 724 }


// Output
// Scaled Rectangle -> { x: 236, y: 322, width: 651, height: 891 }

console.log(findScaledRectangle(boundary, rectangle));
