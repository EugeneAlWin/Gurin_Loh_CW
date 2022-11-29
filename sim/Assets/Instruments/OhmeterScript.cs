using System;
using TMPro;
using UnityEngine;

public class OhmeterScript : MonoBehaviour
{
    private CondsAnim condsAnimClass;
    private BurnerScript burnerState;
    private TextMeshPro ohmmeterVal;
    private readonly float TRCOfLead = 3.7f, TRCOfAluminium = 4.2f, TRCOfIron = 6.0f,
        SRLead = 2.05e-7f, SRAluminium = 2.71e-8f, SRIron = 9.8e-8f,
        length = 0.25f, square = 314.0f;
    private float R1, R2, R3;

    private float currentResistance;

    private void Start()
    {
        condsAnimClass = GameObject.Find("Conductors").GetComponent<CondsAnim>();
        burnerState = GameObject.Find("BurnerHand").GetComponent<BurnerScript>();
        ohmmeterVal = GameObject.Find("ohmVal").GetComponent<TextMeshPro>();
        currentResistance = (float)(SRLead * length / square * Math.Pow(10, 9));
    }

    private void Update()
    {
        switch (condsAnimClass.currentConductor)
        {
            case CondsAnim.Conductors.Lead:
                switch (burnerState.currentState)
                {
                    case BurnerScript.BurnerState.Off:
                        R1 = (float)(SRLead * length / square * Math.Pow(10, 9));
                        currentResistance = Mathf.Lerp(currentResistance, R1, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                    case BurnerScript.BurnerState.Middle:
                        R2 = (float)(SRLead * length / square * Math.Pow(10, 9)) * (1.0f + (TRCOfLead * (50.0f - 20.0f)));
                        currentResistance = Mathf.Lerp(currentResistance, R2, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                    case BurnerScript.BurnerState.Full:
                        R3 = (float)(SRLead * length / square * Math.Pow(10, 9)) * (1.0f + (TRCOfLead * (100.0f - 20.0f)));
                        currentResistance = Mathf.Lerp(currentResistance, R3, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                }
                break;
            case CondsAnim.Conductors.Aluminium:
                switch (burnerState.currentState)
                {
                    case BurnerScript.BurnerState.Off:
                        R1 = (float)(SRAluminium * length / square * Math.Pow(10, 9));
                        currentResistance = Mathf.Lerp(currentResistance, R1, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                    case BurnerScript.BurnerState.Middle:
                        R2 = (float)(SRAluminium * length / square * Math.Pow(10, 9)) * (1.0f + (TRCOfAluminium * (50.0f - 20.0f)));
                        currentResistance = Mathf.Lerp(currentResistance, R2, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                    case BurnerScript.BurnerState.Full:
                        R3 = (float)(SRAluminium * length / square * Math.Pow(10, 9)) * (1.0f + (TRCOfAluminium * (100.0f - 20.0f)));
                        currentResistance = Mathf.Lerp(currentResistance, R3, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                }
                break;
            case CondsAnim.Conductors.Iron:
                switch (burnerState.currentState)
                {
                    case BurnerScript.BurnerState.Off:
                        R1 = (float)(SRIron * length / square * Math.Pow(10, 9));
                        currentResistance = Mathf.Lerp(currentResistance, R1, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                    case BurnerScript.BurnerState.Middle:
                        R2 = (float)(SRIron * length / square * Math.Pow(10, 9)) * (1.0f + (TRCOfIron * (50.0f - 20.0f)));
                        currentResistance = Mathf.Lerp(currentResistance, R2, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                    case BurnerScript.BurnerState.Full:
                        R3 = (float)(SRIron * length / square * Math.Pow(10, 9)) * (1.0f + (TRCOfIron * (100.0f - 20.0f)));
                        currentResistance = Mathf.Lerp(currentResistance, R3, Time.deltaTime * 2);
                        ohmmeterVal.text = $"{currentResistance:f3}" + " мкΩ";
                        break;
                }
                break;
        }
    }

}
