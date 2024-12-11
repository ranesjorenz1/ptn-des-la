document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById("image-container");
  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");
  const atvInput = document.getElementById("atv");

  function generateImages(start, end, pricePerImage) {
    imageContainer.innerHTML = ""; // Clear existing images
    for (let i = start; i <= end; i++) {
      const imageItem = document.createElement("div");
      imageItem.className = "image-item";

      const img = document.createElement("img");
      img.src = "image/ptn.png"; // Replace with your image path
      img.alt = ` ${i}`;

      const span1 = document.createElement("span");
      span1.className = "number1";
      span1.textContent = ` NO.${i}`;

      const signature = document.createElement("span");
      signature.className = "signature";
      signature.textContent = `SIGNATURE:`;

      const onehour = document.createElement("span");
      onehour.className = "onehour";
      onehour.textContent = `1 HOUR`;

      const coupon = document.createElement("span");
      coupon.className = "coupon";
      coupon.textContent = `1 HOUR ATV COUPON`;

      const logotext = document.createElement("span");
      coupon.className = "logotext";
      coupon.textContent = "ATV & BUGCAR RENTAL";

      const address = document.createElement("span");
      address.className = "address";
      address.textContent = "BUENOS AIRES, CARMEN, BOHOL";

      const contact = document.createElement("span");
      contact.className = "contact";
      contact.textContent = "0998 576 3704 / 09998 884 0851";

      const logoborder = document.createElement("span");
      logoborder.className = "logoboarder";
      logoborder.textContent = "";

      const outerborder = document.createElement("span");
      outerborder.className = "outerborder";
      outerborder.textContent = "";

      const span2 = document.createElement("span");
      span2.className = "number2";
      span2.textContent = `NO.${i}`;

      const spanPrice1 = document.createElement("span");
      spanPrice1.className = "price1";
      if (!isNaN(pricePerImage)) {
        spanPrice1.textContent = `ATV (${pricePerImage})`;
      } else {
        spanPrice1.textContent = "Price: N/A"; // Default if price is not entered
      }

      const spanPrice2 = document.createElement("span");
      spanPrice2.className = "price2";
      if (!isNaN(pricePerImage)) {
        spanPrice2.textContent = `ATV (${pricePerImage})`;
      } else {
        spanPrice2.textContent = "Price: N/A"; // Default if price is not entered
      }

      imageItem.appendChild(img);
      imageItem.appendChild(span1);
      imageItem.appendChild(span2);
      imageItem.appendChild(signature);
      imageItem.appendChild(onehour);
      imageItem.appendChild(coupon);
      imageItem.appendChild(logotext);
      imageItem.appendChild(spanPrice1);
      imageItem.appendChild(spanPrice2);
      imageItem.appendChild(address);
      imageItem.appendChild(contact);
      imageItem.appendChild(logoborder);
      imageItem.appendChild(outerborder);
      // imageItem.appendChild([
      //   {
      //     img,
      //     span1,
      //     span2,
      //     signature,
      //     onehour,
      //     coupon,
      //     logotext,
      //     spanPrice1,
      //     spanPrice2,
      //     address,
      //   },
      // ]);
      imageContainer.appendChild(imageItem);
    }
  }

  function updateImages() {
    const start = parseInt(startInput.value);
    const end = parseInt(endInput.value);
    const price = parseFloat(atvInput.value);

    if (!isNaN(start) && !isNaN(end) && start <= end) {
      generateImages(start, end, price);
    }
  }

  startInput.addEventListener("input", updateImages);
  endInput.addEventListener("input", updateImages);
  atvInput.addEventListener("input", updateImages);
});
