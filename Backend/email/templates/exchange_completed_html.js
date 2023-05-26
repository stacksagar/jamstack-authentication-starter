const Setting = require("../../models/Setting");

const exchange_completed_html = async ({
  user_name = "#",
  order_id = "",
  exchange_rate = "",
  sent_wallet = "",
  sent_details = "",
  receive_wallet = "",
  sent_amount = "",
  receive_amount = "",
}) => {
  const setting = await Setting.findOne({ where: { id: 1 } });
  const { header_logo, email, facebook, youtube, whatsapp } = setting?.client;

  return `
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#f9f9f9; padding: 20px 0; font-family: arial; " id="bodyTable">
  <tbody>
    <tr>
      <td style="padding-right:10px;padding-left:10px;" align="center" valign="top" id="bodyCell">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperBody" style="max-width:600px">
          <tbody>
            <tr>
              <td align="center" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableCard" style="background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;">
                  <tbody>
                    <tr>
                      <td style="background-color:#00d2f4;font-size:1px;line-height:3px" class="topBorder" height="3">&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="padding-top: 60px; padding-bottom: 20px;" align="center" valign="middle" class="emailLogo">
                        <a href="#" style="text-decoration:none" target="_blank">
                          <img alt="" border="0" src="${header_logo}" style="width:100%;max-width:150px;height:auto;display:block" width="150">
                        </a>
                        </br>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 5px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="mainTitle">
                        <h2 class="text" style="color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0">Hi ${user_name}</h2>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-left:20px;padding-right:20px" align="center" valign="top" class="containtTable ui-sortable">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableButton" style="">
                          <tbody>
                            <tr>
                              <td style="padding-top:20px;padding-bottom:20px" align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" align="center">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h3 style="color:#22c55e; padding:6px; text-align:center;">Your Exchange has been completed!</h3>
                                    </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table>
                                  <tbody>
                                    <tr>
                                      <th style="text-align: right; padding:6px;">Order ID:</th>
                                      <td> ${order_id} </td>
                                    </tr>

                                    <tr>
                                     <th style="text-align: right; padding:6px;">Sent Amount :</th>
                                     <td> ${sent_amount} </td>
                                    </tr>

                                    <tr>
                                      <th  style="text-align: right; padding:6px;">Exchange Rate:</th>
                                      <td> ${exchange_rate} </td>
                                    </tr>

                                    <tr>
                                      <th style="text-align: right; padding:6px;">Receive Amount :</th>
                                      <td> ${receive_amount} </td>
                                    </tr>

                                    <tr>
                                      <th style="text-align: right; padding:6px;">Your receive account:</th>
                                      <td> ${receive_wallet} </td>
                                    </tr>

                                    <tr>
                                      <th style="text-align: right; padding:6px;">You sent from:</th>
                                      <td> ${sent_wallet} </td>
                                    </tr>

                                    <tr>
                                      <th  style="text-align: right; padding:6px;">Payment ID/Details:</th>
                                      <td> ${sent_details} </td>
                                    </tr>


                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:1px;line-height:1px" height="20">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center" valign="middle" style="padding-bottom: 40px;" class="emailRegards">
                        <!-- Image and Link // -->
                        <p style="max-width:400px">Please wait a moment, It will take some time for us to verify all the information...!</h3>
                        <br />
                        <br />
                        <h3>Thank you for using our website. stay with us, </b></h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
                  <tbody>
                    <tr>
                      <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperFooter" style="max-width:600px">
          <tbody>
            <tr>
              <td align="center" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer">
                  <tbody>
                    <tr>
                      <td style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" align="center" valign="top" class="socialLinks">
                        <a href="${facebook}" style="display:inline-block" target="_blank" class="facebook">
                          <img alt="" border="0" src="https://img.icons8.com/?size=1x&id=118497&format=png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                        </a>
                        <a href="${youtube}" style="display: inline-block;" target="_blank" class="linkdin">
                          <img alt="" border="0" src="https://img.icons8.com/?size=512&id=19318&format=png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=${whatsapp}&amp;text=some%20predefined%20message&amp;source=&amp;data=" style="display: inline-block;" target="_blank" class="linkdin">
                          <img alt="" border="0" src="https://img.icons8.com/?size=1x&id=16713&format=png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 10px 5px;" align="center" valign="top" class="brandInfo">
                        <p class="text" style="color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0">🔒 Secure Exchange </p>
                      </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                      <td style="padding: 0px 10px 10px;" align="center" valign="top" class="footerEmailInfo">
                        <p class="text" style="color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0"> ${
                          email
                            ? `If you have any quetions please contact us <a href="mailto:${email}" style="color:#bbb;text-decoration:underline" target="_blank"> ${email}`
                            : ""
                        }  </a>
                        </p>
                      </td>
                    </tr>
                    <tr style="display:none;">
                      <td style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" align="center" valign="top" class="appLinks">
                        <a href="#Play-Store-Link" style="display: inline-block;" target="_blank" class="play-store">
                          <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/app/play-store.png" style="height:auto;margin:5px;width:100%;max-width:120px" width="120">
                        </a>
                        <a href="#App-Store-Link" style="display: inline-block;" target="_blank" class="app-store">
                          <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/app/app-store.png" style="height:auto;margin:5px;width:100%;max-width:120px" width="120">
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

  `;
};

module.exports = exchange_completed_html;
