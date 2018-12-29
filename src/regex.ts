export default class Regex {
  
  /**
   * Evaluates that a value has only letters
   */
  public static lettersOnly = /^[A-Za-z]+$/;
  
  /**
   * Evaluates that a value has only numbers
   */
  public static numbersOnly = /^[0-9]+$/;

  /**
   * Evaluates a Hexadecimal Color Code Value
   */
  public static hexValue = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
  
  /**
   * Evaluates an Email Address
   */
  public static email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  
  /**
   * Evaulates a URL (supports both http and https)
   */
  public static url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  
  /**
   * Evaultates an IP Address
   */
  public static ipAddress = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
  /**
   * Evaulates an html tag
   */
  public static htmlTag = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;

  /**
   * Evaluates a phone number (Non-US numbers included)
   */
  public static phoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  /**
   * Evaluates an image file extension
   */
  public static imageFile = /^([^\s]+(\.(?i)(jpg|png|gif|bmp))$)$/;

  /**
   * Evaluates a 12 hour time format
   */
  public static timeFormat12hr = /^(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)(am|pm)$/;
  
  /**
   * Evaluates a 24 hour time format
   */
  public static timeFormat24hr = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

  /**
   * Evaluates a date format (dd/mm/yyyy)
   */
  public static dateFormat = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/((19|20)\\d\\d)$/;
}