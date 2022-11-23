using UnityEngine;

public partial class Tasks : MonoBehaviour
{
    private void Task1()
    {
        switch (state)
        {
            case States.Started:
                groundTaskText.text = "Задание 1. Подключите проводник к источнику напряжения.";
                state = States.Continue;
                break;
            case States.Continue:

                break;
            case States.Completed:
                text.text = "Задание 1. Подключите проводник к источнику напряжения. Проводник подключен. Задание выполнено.";
                state = States.Started;
                break;
        }
    }
    private void Task2()
    {

    }
    private void Task3()
    {

    }
    private void Task4()
    {

    }
    private void Task5()
    {

    }

    private void Task6()
    {

    }
    private void Task7()
    {

    }
    private void Task8()
    {

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