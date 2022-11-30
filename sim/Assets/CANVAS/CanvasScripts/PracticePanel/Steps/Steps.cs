using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Steps : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    private string stepName;
    private Text groundText;

    void Start()
    {
        groundText = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
    }
    
    public void OnPointerEnter(PointerEventData eventData)
    {
        stepName = gameObject.name.Replace("Step", "");
        switch (stepName)
        {
            case "1":
                groundText.text = "Задание 1. Запишите в таблицу температуру проводника (свинец).";
                break;
            case "2":
                groundText.text = "Задание 2. Запишите в таблицу сопротивление проводника.";
                break;
            case "3":
                groundText.text = "Задание 3. Поверните ручку горелки и нагрейте металл до 50 °С.";
                break;
            case "4":
                groundText.text = "Задание 4. Запишите в таблицу температуру проводника.";
                break;
            case "5":
                groundText.text = "Задание 5. Запишите в таблицу сопротивление проводника.";
                break;
            case "6":
                groundText.text = "Задание 6. Поверните ручку горелки и нагрейте металл до 100 °С. Запишите температуру.";
                break;
            case "7":
                groundText.text = "Задание 7. Запишите сопротивление.";
                break;
            case "8":
                groundText.text = "Задание 8. Выключите горелку. Смените металл на алюминий.";
                break;
            case "9":
                groundText.text = "Задание 9. Запишите в таблицу температуру проводника.";
                break;
            case "10":
                groundText.text = "Задание 10. Запишите в таблицу сопротивление проводника.";
                break;
            case "11":
                groundText.text = "Задание 11. Поверните ручку горелки и нагрейте металл до 50 °С. Запишите температуру.";
                break;
            case "12":
                groundText.text = "Задание 12. Запишите сопротивление.";
                break;
            case "13":
                groundText.text = "Задание 13. Поверните ручку горелки и нагрейте металл до 100 °С. Запишите температуру.";
                break;
            case "14":
                groundText.text = "Задание 14. Запишите сопротивление.";
                break;
            case "15":
                groundText.text = "Задание 15. Выключите горелку. Смените металл на железо.";
                break;
            case "16":
                groundText.text = "Задание 16. Запишите в таблицу температуру проводника.";
                break;
            case "17":
                groundText.text = "Задание 17. Запишите в таблицу сопротивление проводника.";
                break;
            case "18":
                groundText.text = "Задание 18. Поверните ручку горелки и нагрейте металл до 50 °С. Запишите температуру.";
                break;
            case "19":
                groundText.text = "Задание 19. Запишите сопротивление.";
                break;
            case "20":
                groundText.text = "Задание 20. Поверните ручку горелки и нагрейте металл до 100 °С. Запишите температуру.";
                break;
            case "21":
                groundText.text = "Задание 21. Запишите сопротивление.";
                break;
            case "22":
                groundText.text = "Задание 22. Выключите горелку. Смените металл на свинец.";
                break;
        }
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        groundText.text = "";
    }
}
