const prop = {

    name1: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  };

function changeColor({ styles:{color}}) {
    console.log(color);
}

changeColor(prop);
