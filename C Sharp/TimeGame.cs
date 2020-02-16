using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TimeGame : MonoBehaviour
{
    float roundStartTime;
    float roundStartDelayTime = 3f;
    int waitTime;
    bool roundStarted;

    // Start is called before the first frame update
    void Start()
    {
        print("Press the spacebar once you think the alloted time has passed.");
        Invoke("SetNewRandomTime", roundStartDelayTime);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && roundStarted)
        {
            InputRecieved();
        }
    }

    // Code ran when Spacebar is hit
    void InputRecieved()
    {
        roundStarted = false;
        float playerWaitTime = Time.time - roundStartTime;
        float error = Mathf.Abs(waitTime - playerWaitTime);

        print("You waited for " + playerWaitTime + " seconds. That is " + error + " seconds off. " + GenerateMessage(error));
        Invoke("SetNewRandomTime", roundStartDelayTime);
    }

    // Generate a string (not void)
    string GenerateMessage(float error)
    {
        string message;

        if (error < 0.15f)
        {
            message = "Perfect!";
        }
        else if (error < 0.75)
        {
            message = "Pretty good.";
        }
        else if (error < 01.25)
        {
            message = "Uh. Youre doing good... No really.";
        }
        else if (error < 01.75)
        {
            message = "Yikes...";
        }
        else
        {
            message = "Are you trying?";
        }
        return message;
    }
    // Sets the number of seconds for player to guess
    void SetNewRandomTime()
    {
        waitTime = Random.Range(5, 11);
        roundStartTime = Time.time;
        roundStarted = true;
        print(waitTime + " seconds.");
    }
}