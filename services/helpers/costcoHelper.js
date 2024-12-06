const puppeteer = require('puppeteer');
const COSTCO_FURNITURE_LINK = 'https://www.costco.com/living-room-sets.html';

const getFurniture = async () => {
    const browser = await puppeteer.launch();
    // This would've been a global variable, but necessary to launch new browser after everytime function is called because at the end, it gets closed
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)")
    await page.goto(COSTCO_FURNITURE_LINK,{waitUntil: 'load'})
    await page.evaluate(() => {
        window.scrollTo(0,document.body.scrollHeight)
    })
    const furnitureData = await page.evaluate(() => {
        const furnitureArray = Array.from(document.querySelectorAll('.product'));
        const data = furnitureArray.map((furniture) => ({
            _id: furniture.querySelectorAll('input')[3].value,
            productSku: furniture.querySelectorAll('input')[3].id,
            itemID: furniture.querySelectorAll('input')[3].value,
            link: furniture.querySelector('.description a').href,
            image: furniture.querySelector('.img-responsive').src,
            name: furniture.querySelector('.product-tile-set').querySelector('.description').innerText,
            price: furniture.querySelector('.product-tile-set').querySelector('.price').innerText,
        }))
        return data
    })
    await browser.close()
    return furnitureData
}

const getFurnitureDetails = async (furniture) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)") 
    await page.goto(furniture.link,{waitUntil:'load'})
    await page.evaluate(() => {
        window.scrollTo(0,document.body.scrollHeight)
    })
    const specs = await page.evaluate(() => {
        const getSpecs = (arr) => {
            const output = {weight:[],dimension: []};
            arr.forEach(item => {
                const currDetail = item.innerText.toLowerCase().replace(/(\r\n|\n|\r)/gm, "")
                if (currDetail.includes('weight')) {output.weight.push(currDetail)}
                else if (currDetail.includes('dimension')) {output.dimension.push(currDetail)}
                })
            return output
        }
        const specification = getSpecs(document.querySelectorAll('.product-info-specs .row'),false)
        return {dimensions: specification.dimension, weight: specification.weight}
    })
    return specs
}

module.exports = {getFurniture,getFurnitureDetails}