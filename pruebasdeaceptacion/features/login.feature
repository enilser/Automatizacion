Feature: Pruebas de Logins

  Scenario Outline: Logins
    Given Abrimos el navegador y el sitio web del logins
    When El usuario ingrese el username "<usuarios>", y el password "<passwords>"
    And El usuario presiones clic en el boton entrar
    Then El usuario deberia ver el mensaje "<mensajes>"

    Examples: 
      | usuarios | passwords | mensajes     |
      | f     | ff   | fff |
    | g     | gg   | ggg |
