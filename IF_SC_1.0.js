//Começamos a resolução a partir da Aba "Seus Clientes"

//Aperta do primeiro botão
const crieNovasPromo = document.querySelector("#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe > div.indexstyles__PageSectionWrapper-partner-portal-crm__sc-1xv6gqj-0.hQKZRA > div.sc-gGnURB.iJWWCJ > div.sc-crXcEl.jwSbcz > div > div > button");
crieNovasPromo.click();

//Clica na aba seguidores  
const seguidores = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.jRpMA-d > div:nth-child(1) > div.sc-bczRLJ.hbUVXt > span');
seguidores.click();

//Aperta o botão continuar 
const continuar = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-bczRLJ.cllSmU > button');
botao.click();

//Aperta o listbox
const list = document.querySelector('#downshift-11-toggle-button');
list.click();

//Aperta o a opção 100 no listbox
const list100 = document.querySelector('#downshift-11-item-4');
list100.click();

//Seleciona todos os clientes da tela
const SpanSelect = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-duzrYq.jtmVIG > table > thead > tr > th:nth-child(1) > div.sc-fLlhyt.bdchqW > div > div > span');
SpanSelect.click();
