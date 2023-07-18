import React from "react";
import "./work.css";

const WorkProgress = () => {
  return (
    <div className="workprogress">
      {" "}
      <ul className="infoGraphic">
        <li>
          <div className="numberWrap">
            <div className="number fontColor1">1</div>
            <div className="coverWrap">
              <div className="numberCover"></div>
            </div>
          </div>
          <div className="content">
            <div className="icon iconCodepen"></div>
            <h2>Discover</h2>
            <p>
              This Is The Project Introduction Stage. We Explore Your
              Expectations And The Ideas(If Any) You Have. Assist You To Make A
              Clean Brief, Then Dig Deeper To Identify The Achievable Best
              Solution. Email Is The Preferred Communication Method At This
              Stage. When You Decide To Work With Us, We Get Together To Create
              A Detailed Brief With Assumptions And Constraints.
            </p>
          </div>
        </li>
        <li>
          <div className="numberWrap">
            <div className="number fontColor2">2</div>
            <div className="coverWrap">
              <div className="numberCover"></div>
            </div>
          </div>
          <div className="content">
            <div className="icon iconSocial"></div>
            <h2>Define</h2>
            <p>
              The Objective Of This Stage Is To Define The Project Scope,
              Technical Requirements, And Milestones. We Use In-House Project
              Management Tools To Manage Them So That You Can Keep Track Of
              Progress And Changes Happening. You Will Have Full Control Over
              Approval.
            </p>
          </div>
        </li>
        <li>
          <div className="numberWrap">
            <div className="number  fontColor3">3</div>
            <div className="coverWrap">
              <div className="numberCover"></div>
            </div>
          </div>
          <div className="content">
            <div className="icon iconAirplane"></div>
            <h2>Design</h2>
            <p>
              In This Stage, Your Project Starts To Get A Face. Based On Your
              Information, Industry Trends, Customers, And Competitors We Will
              Create The Visual/S And Design Guidelines For Your Approval.
            </p>
          </div>
        </li>
        <li>
          <div className="numberWrap">
            <div className="number  fontColor4">4</div>
            <div className="coverWrap">
              <div className="numberCover"></div>
            </div>
          </div>
          <div className="content">
            <div className="icon iconMap"></div>
            <h2>Develop</h2>
            <p>
              In This Phase, We Start Working On Approved Visual/S And Ensure It
              Looks As Expected. Based On Your Review Feedback We Adjust (If
              Necessary) So That It Performs The Way You Want It To Be.
            </p>
          </div>
        </li>
        <li>
          <div className="numberWrap">
            <div className="number  fontColor5">5</div>
            <div className="coverWrap">
              <div className="numberCover"></div>
            </div>
          </div>
          <div className="content">
            <div className="icon iconBulb"></div>
            <h2>Deploy</h2>
            <p>
              Our QA Team Will Work Through The Checklist Before It Goes Live.
              We Will Need You2 To Have A Look Thoroughly And Let Us Know If You
              Any Feedback Is There. Once All Are In Place, We Move It To Live.
            </p>
          </div>
        </li>
        <li>
          <div className="numberWrap">
            <div className="number  fontColor6">6</div>
            <div className="coverWrap">
              <div className="numberCover"></div>
            </div>
          </div>
          <div className="content">
            <div className="icon iconPeace"></div>
            <h2>Deliver</h2>
            <p>
              After Making It Live, We Will Be There For Any Urgent Bug Fixes.
              We Will Share Documentation, Including Video Instructions So That
              You Can Reference Them For Any Updates/Fixes. Then It’s Up To You
              To Decide If Our Support Is Needed. And Lastly, We Are Not Going
              To Say Goodbye Once The Project Is Done – We’ll Be Here For Any
              Help And Advice.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WorkProgress;
