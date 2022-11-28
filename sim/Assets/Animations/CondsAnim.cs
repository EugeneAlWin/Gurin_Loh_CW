using UnityEngine;

public class CondsAnim : MonoBehaviour
{
    private Animator anim;
    private Animator anim2;
    private Animator anim3;
    void Start()
    {

        anim = GameObject.Find("Conductor3").GetComponent<Animator>();
        anim2 = GameObject.Find("Conductor1").GetComponent<Animator>();
        anim3 = GameObject.Find("Conductor2").GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                if (hit.collider.gameObject.name == "Conductor1")
                {
                    anim.SetInteger("ChosenCond", 1);
                    anim2.SetInteger("ChosenCond", 1);
                    anim3.SetInteger("ChosenCond", 1);
                }
                if (hit.collider.gameObject.name == "Conductor2")
                {
                    anim.SetInteger("ChosenCond", 2);
                    anim2.SetInteger("ChosenCond", 2);
                    anim3.SetInteger("ChosenCond", 2);
                }
                if (hit.collider.gameObject.name == "Conductor3")
                {
                    anim.SetInteger("ChosenCond", 3);
                    anim2.SetInteger("ChosenCond", 3);
                    anim3.SetInteger("ChosenCond", 3);
                }
            }
        }
    }
}
