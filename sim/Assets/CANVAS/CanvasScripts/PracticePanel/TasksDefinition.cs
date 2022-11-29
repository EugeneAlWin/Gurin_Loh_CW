using UnityEngine;

public partial class Tasks : MonoBehaviour
{
    // Lead
    private void Task1()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 1. Запишите в таблицу температуру проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    table.temps[0].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.SecondTask;
                break;
        }
    }
    private void Task2()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 2. Запишите в таблицу сопротивление проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    table.resists[0].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.ThirdTask;
                break;
        }
    }
    private void Task3()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 3. Поверните ручку горелки и нагрейте металл до 50 °С.";
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Middle)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.FourthTask;
                break;
        }
    }
    private void Task4()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 4. Запишите в таблицу температуру проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    table.temps[1].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.FifthTask;
                break;
        }
    }
    private void Task5()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 5. Запишите в таблицу сопротивление проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    table.resists[1].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.SixthTask;
                break;
        }
    }

    private void Task6()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 6. Поверните ручку горелки и нагрейте металл до 100 °С. Запишите температуру.";
                addValue.isAddButtonClicked = false;
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Full && addValue.isAddButtonClicked)
                {
                    table.temps[2].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.SeventhTask;
                break;
        }
    }
    private void Task7()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 7. Запишите сопротивление.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                    table.resists[2].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.EighthTask;
                break;
        }
    }
    // Aluminium
    private void Task8()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 8. Выключите горелку. Смените металл на алюминий.";
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Off && condsAnimClass.currentConductor == CondsAnim.Conductors.Aluminium )
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.NinthTask;
                break;
        }
    }
    private void Task9()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 9. Запишите в таблицу температуру проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    table.temps[3].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.TenthTask;
                break;
        }
    }
    private void Task10()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 10. Запишите в таблицу сопротивление проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    table.resists[3].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.EleventhTask;
                break;
        }
    }
    private void Task11()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 11. Поверните ручку горелки и нагрейте металл до 50 °С. Запишите температуру.";
                addValue.isAddButtonClicked = false;
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Middle && addValue.isAddButtonClicked)
                {
                    table.temps[4].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.TwelfthTask;
                break;
        }
    }
    private void Task12()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 12. Запишите сопротивление.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                    table.resists[4].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.ThirteenthTask;
                break;
        }
    }
    private void Task13()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 13. Поверните ручку горелки и нагрейте металл до 100 °С. Запишите температуру.";
                addValue.isAddButtonClicked = false;
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Full && addValue.isAddButtonClicked)
                {
                    table.temps[5].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.FourteenthTask;
                break;
        }
    }
    private void Task14()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 14. Запишите сопротивление.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                    table.resists[5].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.FifteenthTask;
                break;
        }
    }
    // Iron
    private void Task15()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 15. Выключите горелку. Смените металл на железо.";
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Off && condsAnimClass.currentConductor == CondsAnim.Conductors.Iron)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.SixteenthTask;
                break;
        }
    }
    private void Task16()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 16. Запишите в таблицу температуру проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    table.temps[6].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.SeventeenthTask;
                break;
        }
    }
    private void Task17()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 17. Запишите в таблицу сопротивление проводника.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    table.resists[6].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.EighteenthTask;
                break;
        }
    }
    private void Task18()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 18. Поверните ручку горелки и нагрейте металл до 50 °С. Запишите температуру.";
                addValue.isAddButtonClicked = false;
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Middle && addValue.isAddButtonClicked)
                {
                    table.temps[7].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.NineteenthTask;
                break;
        }
    }
    private void Task19()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 19. Запишите сопротивление.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                    table.resists[7].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.TwentiethTask;
                break;
        }
    }
    private void Task20()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 20. Поверните ручку горелки и нагрейте металл до 100 °С. Запишите температуру.";
                addValue.isAddButtonClicked = false;
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Full && addValue.isAddButtonClicked)
                {
                    table.temps[8].text = inputField.text;
                    inputField.text = "";
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.TwentyFirstTask;
                break;
        }
    }
    private void Task21()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 21. Запишите сопротивление.";
                state = States.Continue;
                break;
            case States.Continue:
                if (addValue.isAddButtonClicked)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                    table.resists[8].text = inputField.text;
                    inputField.text = "";
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.TwentySecondTask;
                break;
        }
    }
    private void Task22()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 22. Выключите горелку. Смените металл на свинец.";
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Off && condsAnimClass.currentConductor == CondsAnim.Conductors.Lead)
                {
                    state = States.Completed;
                    addValue.isAddButtonClicked = false;
                }
                break;
            case States.Completed:
                table.table.SetActive(true);
                groundPanel.GetComponent<GroundPanel>().mustToBeClosed = false;
                groundTaskText.text = "Опыт завершен!";
                state = States.Started;
                currentTask = TasksNums.NULL;
                break;
        }
    }
}