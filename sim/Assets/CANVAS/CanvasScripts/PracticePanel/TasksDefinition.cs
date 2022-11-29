using UnityEngine;

public partial class Tasks : MonoBehaviour
{
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
                }
                break;
            case States.Completed:
                state = States.Started;
                currentTask = TasksNums.EighthTask;
                break;
        }
    }
    private void Task8()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 8. Выключите горелку. Смените металл на алюминий.";
                state = States.Continue;
                break;
            case States.Continue:
                if (burner.currentState == BurnerScript.BurnerState.Full && condsAnimClass.currentConductor == CondsAnim.Conductors.Aluminium )
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

    }
    private void Task10()
    {

    }
    private void Task11()
    {

    }
    private void Task12()
    {

    }
    private void Task13()
    {

    }
    private void Task14()
    {

    }
    private void Task15()
    {

    }
    private void Task16()
    {

    }
}