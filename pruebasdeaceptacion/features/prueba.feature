Feature: Prueba de Trabajo

  Scenario Outline: Examen
    Given Abrimos el navegador y buscamos el sitio de ebay
    When buscamos "<objeto>", elegimos la marca "<marca>" con el tamaño "<tamanio>"
    And ejecutamos los demas procesos de la prueba
    Then se deberia tener como minimo "<cantidad>" registros para la pregunta siete

    Examples: 
      | objeto | marca | tamanio | cantidad |
      | shoes  | PUMA  |      10 |        5 |
