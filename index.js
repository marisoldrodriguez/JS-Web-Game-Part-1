function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom) {
    let characterImage = document.createElement('img')
characterImage.src = url
characterImage.style.position = 'fixed'
characterImage.style.left = left + 'px'
characterImage.style.bottom = bottom + 'px'
document.body.append(characterImage)
return characterImage
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

object.addEventListener('dblclick', function(){
    object.remove()
})
}

// Add green-character
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

newImage('assets/green-character.gif', 100, 100)


// Add pine tree
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '450px'
// document.body.append(pineTree)

newImage('assets/pine-tree.png', 450, 450)

// add tree
newImage('assets/tree.png', 200, 300)
// add pillar
newImage('assets/pillar.png', 350, 100)
// add crate
newImage('assets/crate.png', 150, 200)
// add well
newImage('assets/well.png', 500, 650)

// add sword
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })
newItem('assets/sword.png', 500, 405)
// add shield
newItem('assets/sheild.png', 165, 185)
// add staff
newItem('assets/staff.png', 600, 100)

// BONUS
// add grass and sky
// newImage('assets/grass.png', 100, 100)
// newImage('assets/sky.png', 100, 900)
// let horizon = window.innerHeight / 1.75
// let heightOfSky = window.innerHeight-horizon
// let heightOfGrass = horizon

// tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)