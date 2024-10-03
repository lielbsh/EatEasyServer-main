const puppeteer=require('puppeteer')


async function findingredientid(searchstring){
    const browser=await puppeteer.launch()
    const page=await browser.newPage()
<<<<<<< HEAD
    await page.setViewport({ width: 1920, height: 1000 });
=======
    await page.setViewport({ width: 1920, height: 2000 });
>>>>>>> new-origin/main
    await page.goto(`https://www.foodb.ca/unearth/q?utf8=%E2%9C%93&query=${searchstring}&searcher=foods&button=`)
    const databaseid=await page.$$eval('body > main > div.unearth-search-results.unearth-food-search-results>div', (results) => {
        return results.map(x=>{
            if (x.querySelector(".unearth-search-details .result-link")){
                data=x.querySelectorAll("a")
                return(
                    {id: data[0].textContent,
                    hitname: data[1].textContent
                    })  
            }else { 
                return undefined
            }
        })
    })
    await browser.close()
<<<<<<< HEAD
    
    return(databaseid)
    
}

async function listfindingredientid(ingredients) {
    const ingredientIds = await Promise.all(ingredients.map(async (ingredient) => {
        
        return await findingredientid(ingredient);
    }));
    return ingredientIds;
}


module.exports = {findingredientid,listfindingredientid}
=======
    if (databaseid.length==0){
        return('ingrident doesnt found in database')
    }else{
    return(databaseid)
    }
}

async function logthem (){
    x=await findingredientid('prepared+graham+cracker+crust')
    console.log(x)
}


module.exports = {findingredientid}
>>>>>>> new-origin/main
