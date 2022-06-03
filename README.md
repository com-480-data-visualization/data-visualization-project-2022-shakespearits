# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Gillyboeuf | 299327 |
| Papadopoulos | 343179 |
| Rescala | 337736 |

<p align="center">
     <a href="https://com-480-data-visualization.github.io/data-visualization-project-2022-shakespearits/website/index.html"> :performing_arts: Go to website :performing_arts:</a>
</p>

[Milestone 1](#pencil2-milestone-1-8th-april-5pm) • [Milestone 2](#performing_arts-milestone-2-6th-may-5pm) • [Milestone 3](#clap-milestone-3-3rd-june-5pm)

## ✏️ Milestone 1 (8th April, 5pm)

**10% of the final grade**

### Dataset

  We will be using multiple [datasets](data) to support our creative ideas for the project. Our main dataset comes from Kaggle, whereas the other two datasets will be manually curated from web content. The datasets are as follow:
- [Shakespeare plays | Kaggle dataset](https://www.kaggle.com/datasets/kingburrito666/shakespeare-plays): it is comprised of all Shakespeare’s plays and contains the following relevant attributes:
  - The play that the lines are from
  - The actual line being spoken
  - The Act-Scene-Line feature which indicates the act and scene in which the line is spoken
  - The player who is uttering the line
  - The number of the line in the scene: this gives us an insight on what moment of the scene the line was spoken

- The following dataset will be created manually and will serve as metadata as it will gather information about the players found in the main dataset. It will contain the following features: 
  - the name of the play, 
  - the name of the player,
  - the role of the player,
  - the gender of the player
  - a small description of the player.

- The last dataset will contain pairs of characters and their relationship (e.g. family, friends, lovers, …). It will serve as a support for the creation of undirected relationship graphs. Its attributes are the play name, the names of two players and their relationship.
You may find a first draft of this dataset in the following [Google Sheet]( https://docs.google.com/spreadsheets/d/1mXiWwkJdKY17SZ2V29jC9RvpQgsCbn0mdo9YVyaGr38/edit?usp=sharing) 

The quality of our main [Kaggle dataset](https://www.kaggle.com/datasets/kingburrito666/shakespeare-plays) is relatively good but could use the following steps for pre-processing:
- Remove lines that are not uttered by any player (i.e. description of the scene by the narrator)
- Add the number of words per line, since one line corresponds neither to a full phrase nor to a specific number of characters
- Add the topics evoked in each line by using NLP techniques
- Expand the Act-Scene-Line column into three distinct columns
- Select rows that correspond to plays we are interested in


### Problematic

  William Shakespeare is arguably one of the greatest playwrights of all time. His tragedies are particularly famous, although he covers widespread themes across his works. In this visualization project, we hope to illuminate many features of Shakespeare’s top plays. With the help of natural language processing techniques like topic detection and sentiment analysis, we can unearth which themes he covers, and how often each theme appears in each work. Since the characters in the play are elemental in each work, we also extend this analysis of themes to the character level, where we display who is comical, tragic, romantic, loyal, etc. Additionally, we hope to find a correlation between themes and the success of each play.
  
  With this knowledge, we aim to create data-informed activities that allow for interaction with the website we create. Since we believe our audience will be interested in literature and theater, we will accordingly create a quiz that suggests which Shakespeare play they should read next. Since we assume our audience to be knowledgeable on many of the works, we will also form quizzes testing their knowledge with questions asking them to identify the play and/or speaker of a quote. We also may add a fun personality kind of quiz that gives the user which character they are most like.
  
  We plan to visualize the interconnectedness of character relationships in each play with interactive networks that allow users to zoom in and get descriptions of each character. We will create filters for such networks that change the information provided. For example, one filter could be loyalty, where we give each player a score for how loyal they are and then the color of their node on the network would represent their score. That way, the loyalty of a character can be visualized in comparison to other characters and with what other players they form a relationship with. 

  Altogether, our goal is to create a fun, interactive website for lovers of all things Shakespeare.

### Exploratory Data Analysis

  In the EDA [notebook](notebooks/pre-processing.ipynb) you will find the pre-processing of our main dataset as well as some initial exploratory data analysis. We extract some basic statistics about the all dataset and then we focus on the eight plays we chose. The notebook contains sentiment scores, descriptive statistics and topic detection.


### Related work

- What others have already done with the data?
The data from Kaggle was mostly used for [text generation](https://www.kaggle.com/datasets/kingburrito666/shakespeare-pays/code) but nobody used it for visualization purposes. Thus, we thought it could be original to take this data and create a good, funny, interactive and attractive website for Shakespeare's lovers and curious people who want to learn more about some Shakespeare’s plays. 

- Why is our approach original?
Most of the websites focus either on the texts themselves or on their representation/ adaptation. Existing websites are mostly for educational purposes, and none shows statistics representation, links between characters, quizzes or sentiments evolution through the play.

- What source of inspiration do we take?
As a source of inspiration we take the following websites:
  - a [website](https://myshakespeare.com/whats-next) for teachers and students to study Shakespeare’s play and their representation.
  - a [flowchart](https://goodticklebrain.com/home/2016/4/18/which-shakespeare-play-should-i-see-an-illustrated-flowchart) as source of inspiration for the quiz that suggests which play to read we were inspired.
  - https://www.folger.edu/shakespeare-unlimited : a website containing podcasts about Shakespeare and his works.
  - a [website](https://www.sparknotes.com/shakespeare/) containing all Shakespeare’s plays translated into modern english. The paid version allows access to quizzes, flashcards and infographics. 
  - a [website](https://nosweatshakespeare.com/) containing all Shakespeare’s plays translated into modern English, quotes, characters list per play and much more information about Shakespeare and his work.
- This is the first time we use this data for a project 


## :performing_arts: Milestone 2 (6th May, 5pm)

**10% of the final grade**

Our milestone 2 document can be found [here](Milestone2-TeamShakespearits.pdf). The skeleton of our website can be found [here](https://com-480-data-visualization.github.io/data-visualization-project-2022-shakespearits/website/index.html). 

## :clap: Milestone 3 (3rd June, 5pm)

**80% of the final grade**

The process book can be found [here](Process_book.pdf).

The screencast san be found [here](https://drive.google.com/drive/folders/1vrx7lTS73bkf0KDDQYtmrQg-MQmb8X-x?usp=sharing).

The final website can be found [here](https://com-480-data-visualization.github.io/data-visualization-project-2022-shakespearits/website/index.html). 


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone


