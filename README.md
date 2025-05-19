<img src="./readme/title1.svg"/>

<br><br>

<!-- project overview -->
<img src="./readme/title2.svg"/>

> **Welcome to the future of healthcare access where patients speak, and AI listens.**
> Imagine booking a doctor’s appointment just by speaking whether in Arabic or English. No waiting lines, no confusing forms. Just you and a chatbot that listens, understands, and books instantly.
>
> **But that’s just half the story.
> On the doctor’s side?**
> A smart web dashboard that turns raw patient data into actionable insights.
> Each patient comes with an AI-generated health snapshot summarizing key medical history and highlighting what matters most for better, faster decision-making.

<br><br>

<!-- System Design -->
<img src="./readme/title3.svg"/>

### Data Model & Relationships

- Smart Clinic Database.
  ![Landing](./readme/demo/SmartClinicERD.png)
  <br><br>

<!-- Project Highlights -->
<img src="./readme/title4.svg"/>

### Project Features

- **Smart AI, Smarter Decisions:** Elevate clinical care with AI-powered insights from symptom analysis to instant, structured patient reports. It’s like giving doctors a second brain that never sleeps, helping them move faster with more confidence.
- **Talk or Text. Book in Seconds:** Say goodbye to call queues and forms. Patients can book appointments just by texting or texting in English or Arabic making healthcare more accessible, and freeing up valuable time for medical staff.
- **Interactive Doctor Dashboard:** From appointment tracking to real-time patient analytics by age, gender, and history the doctor’s dashboard turns complex data into actionable insights at a glance.
  <br><br>

| Project Features                         
| ----------------------------------------- |
|  <div align="center"><img src="./readme/demo/SmartClinic-highlights.png" width="600" height="600"/></div> |
<br><br>
<!-- Demo -->
<img src="./readme/title5.svg"/>

### Patient Screens (Mobile)

| Home screen                                                       | Chatbot screen                                                        | Appointment screen                                                   |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <img src="./readme/demo/homeSceen.jpg" width="200" height="400"/> | <img src="./readme/demo/chatbotScreen.jpg" width="200" height="400"/> | <img src="./readme/demo/voiceChatbot.gif" width="200" height="400"/> |

### Doctor Screens (Web)

| Dashboard screen                                                       | Patient screen                                                       |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <img src="./readme/demo/dashboardPage.png" width="600" height="250" /> | <img src="./readme/demo/patientpage.png" width="600" height="250" /> |

| Appointment screen                                                       | Patient screen GIF                                                     |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| <img src="./readme/demo/appointmentPage.png" width="600" height="250" /> | <img src="./readme/demo/doctorWebsite.gif" width="600" height="250" /> |

<br><br>

<!-- Development & Testing -->
<img src="./readme/title6.svg"/>

### Add Title Here

| Services                                  | Validation                             |
| ----------------------------------------- | -------------------------------------- |
| ![Landing](./readme/demo/controllers.png) | ![fsdaf](./readme/demo/validation.png) |

| Testing                                                            |
| ------------------------------------------------------------------ |
| <img src="./readme/demo/1440x1024.png" width="400" height="250" /> |

<br><br>

<!-- Deployment -->
<img src="./readme/title7.svg"/>

### CI/CD Magic: Deploying Smarter, Not Harder

- The project is containerized using **Docker** and managed through **Docker Compose** for consistent multi-service environments across development, staging, and production.

CI/CD is handled via **GitHub Actions**, with custom workflows set up to automatically build, test, and deploy the application to two separate **AWS EC2 instances**:

- **Staging Server**: For testing new features before production release.
- **Production Server**: For live deployment, ensuring high availability and performance.

Each push to the corresponding branch triggers the appropriate workflow, enabling **seamless and automated deployment** with minimal manual intervention.

| Postman API 1                           | Postman API 2                         | Postman API 3                         |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>
