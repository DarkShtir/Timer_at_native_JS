Timer at native JavaScript
=========================
The timer which uses only JS, HTML and CSS.
It can dynamic show the days, hours, minutes and seconds, or hours(more than 24 hours), minutes and seconds until the deadline. 

How to use it
---------------
1) Your HTML tree must have this structure:

#### HTML-structure

    |body |
          |__id="timer"|
                       |__<span class="days"> </span>
                       |__<span> : </span>
                       |__<span class="hours24"> </span>
                       |__<span> : </span>                       
                       |__<span class="hours"> </span>
                       |__<span> : </span>                       
                       |__<span class="minutes"> </span>
                       |__<span> : </span>                       
                       |__<span class="seconds"> </span>
        
2) You must transfer to deadline in function "timer" in format (YYYY-MM-DD).

Exc.(2019-10-28) or (2018-2-3).

3) Formats
#### Format (days-hours-minutes-seconds)

If you want use the format **(days-hours-minutes-seconds)**, you shall use theese classes in the HTML-structure: ("days", "hours24", "minutes", "seconds").

And you must uncomment the lines in script that contain 'hours24' and 'days', and comment out the lines that contain 'hour'.

The span with class "hour" and span with separator, whitch goes further, you can deleted.

#### Format (hours-minutes-seconds)

If you want use the format **(hours-minutes-seconds)**, you shall use theese classes in the HTML-structure: ("hours", "minutes", "seconds").

And you must comment out the lines in script that contain 'hours24' and 'days', and uncomment the lines that contain 'hour'.

The spans with classes "days" and "hours24", and the span with separator, whitch goes further, you can deleted.

##### Separator **:**

You can use any symbol as the separator (:, -, days/hours/minutes/seconds).

##### Special qualities

If the timer value number become less than 10, the value will display in format 09.