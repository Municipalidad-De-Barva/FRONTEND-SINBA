export default class fecha {
  constructor() {}
  mes(key) {
    let ptr = "";
    switch (key) {
      case 1:
        {
          ptr = "enero";
        }
        break;
      case 2:
        {
          ptr = "febrero";
        }
        break;
      case 3:
        {
          ptr = "marzo";
        }
        break;
      case 4:
        {
          ptr = "abril";
        }
        break;
      case 5:
        {
          ptr = "mayo";
        }
        break;
      case 6:
        {
          ptr = "junio";
        }
        break;
      case 7:
        {
          ptr = "julio";
        }
        break;
      case 8:
        {
          ptr = "agosto";
        }
        break;
      case 9:
        {
          ptr = "setiembre";
        }
        break;
      case 10:
        {
          ptr = "octubre";
        }
        break;
      case 11:
        {
          ptr = "noviembre";
        }
        break;
      case 12:
        {
          ptr = "diciembre";
        }
        break;

      default:
        break;
    }
    return ptr;
  }
}
