const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const clickElement = async (selector, delayTime) => {
    await delay(delayTime);
    const element = document.querySelector(selector);
    if (element) element.click();
};

const selectDate = async (delayTime) => {
    const dateBox = document.querySelector('#dueDate');
    dateBox.click();
    
    await new Promise(resolve => setTimeout(resolve, delayTime)); // Aguarda o tempo especificado
    
    const hoje = new Date();
    const selector_quatrosemanas = document.querySelectorAll('.DayPicker-Week .DayPicker-inner-day');

    for (const data of selector_quatrosemanas) {
        const numeroDia = parseInt(data.textContent, 10);

        if (numeroDia > hoje.getDate()) {
            data.click();
            break;
        }
    }
};

(async () => {
    await clickElement("#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe > div.indexstyles__PageSectionWrapper-partner-portal-crm__sc-1xv6gqj-0.hQKZRA > div.sc-gGnURB.iJWWCJ > div.sc-crXcEl.jwSbcz > div > div > button", 2500);
    await clickElement('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.jRpMA-d > div:nth-child(1)', 2500);
    await clickElement('div.sc-bczRLJ.cllSmU > button', 2500);
    await clickElement('[id^="downshift-"][id$="-toggle-button"]', 2500);
    await clickElement('[id^="downshift-"][id$="-item-4"]', 2500);
    await clickElement('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-duzrYq.jtmVIG > table > thead > tr > th:nth-child(1) > div.sc-fLlhyt.bdchqW > div > div > span', 2500);
    await clickElement('div.sc-bczRLJ.cllSmU > button', 2500);
    await clickElement('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.iTOJzk > div:nth-child(1) > div.sc-bczRLJ.kJSGHS', 2500);
    await clickElement('div.sc-bczRLJ.cllSmU > button', 2500);
    await selectDate(2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-bZkfAO.eJQDwa > div > div > div:nth-child(4) > label', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-bZkfAO.eJQDwa > div > div > div:nth-child(4) > label', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-hKMtZM.eIDMHW.sc-ezWOiH.janTdf', 2500);
    await clickElement('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-1fkx9ru-0.jsPyvf > button', 2500);
    await clickElement("#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe > div.indexstyles__PageSectionWrapper-partner-portal-crm__sc-1xv6gqj-0.hQKZRA > div.sc-gGnURB.iJWWCJ > div.sc-crXcEl.jwSbcz > div > div > button", 2500);
    await clickElement('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.jRpMA-d > div:nth-child(2)', 2500);
    await clickElement('div.sc-bczRLJ.cllSmU > button', 2500);
    await clickElement('[id^="downshift-"][id$="-toggle-button"]', 2500);
    await clickElement('[id^="downshift-"][id$="-item-4"]', 2500);
    await clickElement('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-duzrYq.jtmVIG > table > thead > tr > th:nth-child(1) > div.sc-fLlhyt.bdchqW > div > div > span', 2500);
    await clickElement('div.sc-bczRLJ.cllSmU > button', 2500);
    await clickElement('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.iTOJzk > div:nth-child(1) > div.sc-bczRLJ.kJSGHS', 2500);
    await clickElement('div.sc-bczRLJ.cllSmU > button', 2500);
    await clickElement('#dueDate', 2500);
    await selectDate(2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-bZkfAO.eJQDwa > div > div > div:nth-child(5) > label', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO', 2500);
    await clickElement('div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO', 2500);
})();
