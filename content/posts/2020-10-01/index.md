---
title: Best things I stole from great developers
author: Paulius Rimgaila
date: 2020-10-01
hero: ./images/hero.jpg
excerpt: What successful developers do day to day
---

### In this post I will list my top sticked things from great developers!

## Rule of 3.

Is a code refactoring rule of thumb to decide when a replicated piece of code should be replaced by a new code/procedures/methods.

> It states that you are allowed to copy and paste the code once, but that when the same code is replicated three times, it should be extracted into a new procedure.

The main concept is to make code/procedures/methods generic so it can be reused in many places.

---

## Consistency is king

Being consistent with the structure and how you code things. This can help with the readability & maintainability of your application.

Try and come up with coding standards, that help with consistency. It should be as little as the naming conventions of your variables. Another big one is the structure of the application, it should be obvious where the developer needs to make changes or add something new.

---

### Reduce nesting

An if within if can get messy and very hard to read, very quickly. Sometimes you may not be able to get around this but always have a look at the structure of your code.

This is also the same for else if . Avoid if possible as this can sometimes make the code harder to read.

A guard clause is an effective way to help with this!

> A guard clause is simply a check that immediately exits the function, either with a return statement or an exception.

example with no guard clause

```javascript
getPayAmount(): number {
  let result: number;
  if (isDead){
    result = deadAmount();
  }
  else {
    if (isSeparated){
      result = separatedAmount();
    }
    else {
      if (isRetired){
        result = retiredAmount();
      }
      else{
        result = normalPayAmount();
      }
    }
  }
  return result;
}
```

example with no guard clause

```javascript
getPayAmount(): number {
  if (isDead){
    return deadAmount();
  }
  if (isSeparated){
    return separatedAmount();
  }
  if (isRetired){
    return retiredAmount();
  }
  return normalPayAmount();
}
```

---

## Think of the bigger picture

Understanding the bigger picture is very important this then makes the smaller detail easier to follow. Once you understand the bigger picture, the little detail won’t take you too long to figure out.

---

## Spend time thinking of naming things

Naming things in coding is one of the hardest things you can do. This can be naming a class, method or even a variable.

The great developers take their time thinking of relevant names as they know this helps with readability!

---

## Technical debt is bad

Overestimating can help with this. Write it best as you can once otherwise you will have to come back to it over and over again.

> Technical debt is a concept in software development that reflects the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer

### Overestimate

Might be a strange one and depending on what department you work in you may not like this point but you will see the great developers overestimate tasks as they know things always take longer then you expect and an adding a buffer to the estimate can really help you get things right.

This can really help with the above point “Technical debt is bad”. if you underestimate or estimate a time which is only considering the happy path this can actually create technical debt as you will only have time to make it work rather then making the code clean and easy to maintain.

### Documentation and code comments

They help to preserve context and share knowledge. You will hear the more experienced keep saying can we document that process or fail code reviews as there no comments on things like interfaces.

### Be confident about deleting bad code

You will see a lot the less confident developers comment out massive blocks of code and leave them there. Version control is there for a purpose! The great developers don't shy away from deleting the bad parts of the application.

### Spend time on code Reviews

The good developers will spend longer on code reviews and know the importance of code reviews.

- Help find bugs early
- Improves developers skills and getting the rest of the team into good practices.
- Sharing knowledge
- Consistent design and implementation

the `Best code review` i've seen:

- A Small task with little risk should be reviewed by 1 developer at their desks.
- A medium-sized/large change or a risky change should be reviewed by 3 developers one of them being a senior developer at their desks.
- An extremely risky change or a new part of the application being developed should have a meeting booked and 3 developers at least one of them being a lead developer going through each line together and making points.

---

Write good tests

You will notice the more experienced and stronger developers take more time on writing good tests.

Having good tests help you scale your application with more confidence and help reduce production bugs.

---

### Spend time designing

Before they dive into the code they have a think through and break it down into small chunks. This helps them be more prepared on how everything fits together and create cleaner code.

---

### Focus on the fundamentals and not on the syntax

This is a big one! They like to learn the fundamentals over-focusing on syntax. This helps them find problems more effectively. This can also help them google issues with more understanding.

---

### Make Google your best friend

They are experts at Googling to help them solves their problems. This help because of the above point `Focus on the fundamentals and not on the syntax`.

Because they’ve focused on the fundamentals they know what Google terms to search. This is difficult to do if you’ve obsessed with learning the syntax!

---

### Make sure it works first, then make it pretty later

You see this a lot with the weaker developers they seem to spend so much time making it look pretty at the start and then find out later how they have coded won't work.

The great developers get a happy path working earlier on. Helping them to identify any issues early on before they make it pretty. This can help projects go a lot more smoothly.

---

### Risk management and problem resolution

Senior developers can define risks, can distil complex problems through the application of design patterns and can independently solve different issues due to past experience.

---

### Risk management and problem resolution

Senior developers can define risks, can distil complex problems through the application of design patterns and can independently solve different issues due to past experience.

---

### Ask questions

Great developers want to know everything. They don't mind asking questions even if they might sound extremely simple. These can be technical or business-related questions.

Understanding the business needs helps them create better code! They are not scared of asking questions as they’re confident in their ability.

---

### Keep logic out of the database whenever possible

This point comes down to the type of your application you’re building and only if it's not going to affect performance.

They know to keep their database queries to simple CRUD operations.

Then the business logic layer should pull this all together. This helps developers know where to look for business logic. This can get messy very quickly if you have logic in database queries and in the code!

### KISS

They know keeping the code simple is the best thing to do. Even if that means sometimes creating more lines of codes. You will see a lot of the weaker developers create one-liners.

This often works but reading this is extremely hard!

---

## Conclusion

This is what I see great developers do day to day. You will see a lot of them are not to do with the actual coding but process’s and how they approach tasks. I’m sure there is a lot more to add to this list. I hope you’ve enjoyed reading!
