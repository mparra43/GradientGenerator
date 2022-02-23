 const getRandomColor = () => {

    let array = [1, 2, 3, 4, 5, 6]
    let letters = '0123456789ABCDEF'.split('');
    let primaryColor = '#';
    let secondaryColor = '#';
    array.map((item) => {
        primaryColor += letters[Math.floor(Math.random() * 16)];
        secondaryColor += letters[Math.floor(Math.random() * 16)];
        return item
    })

    return { primaryColor, secondaryColor };
}


const formatColor = (type, color)=>{
    console.log(type, color)
        if(type ==='primaryColor'){
            let primaryColor = color.slice(0,7)
          return primaryColor;
        }else if(type ==='secondaryColor'){
            return color.slice(8,color.length);
        }
}

export{
    getRandomColor,
    formatColor
}
