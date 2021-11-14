using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Net;
using Newtonsoft.Json;

namespace Thingspeak2
{
    public partial class Form1 : Form
    {
        static WebRequest request;
        static WebResponse response;
        static string host = "https://api.thingspeak.com/channels/";
        static string channel = "1068886l";
        static string read_api_key = "7VF0KX0CJLUUFB8M";
        static string entry_id="last";
        static string field1;
        static string field2;
        static string field3;
        static string field4;
        static int id;
        static int last;
        string url = host + channel + "/feeds/" + entry_id + ".json?api_key=" + read_api_key;
        public Form1()
        {
            InitializeComponent();
            
           
            
            // Create a request for the URL.

            // If required by the server, set the credentials.

            // Display the status.
            // Get the stream containing content returned by the server.
            // The using block ensures the stream is automatically closed.

            // Close the response.
            get_data(url);
            id = Int32.Parse(entry_id);
            entry_id_textBox.Text = entry_id;
            last = id;
            if (field1 == null)
                get_field1(id);
            field1_textBox.Text = field1+ "℃";
            
            if (field2 == null)
                get_field2(id);
            field2_textBox.Text = field2+"%";
            
            if (field3 == null)
                get_field3(id);
            field3_textBox.Text = field3 + "℃";
            
            if (field4 == null)
                get_field4(id);
            field4_textBox.Text = field4 + "%";
            
        }

        private void reset_button_Click(object sender, EventArgs e)
        {
            reset_button.Enabled = false;
            determine_button.Enabled = false;
            id = last;
            entry_id_textBox.Text = Convert.ToString(id);
            if (field1 == null)
                get_field1(id);
            field1_textBox.Text = field1 + "℃";

            if (field2 == null)
                get_field2(id);
            field2_textBox.Text = field2+"%";

            if (field3 == null)
                get_field3(id);
            field3_textBox.Text = field3+ "℃";

            if (field4 == null)
                get_field4(id);
            field4_textBox.Text = field4 + "%";
            reset_button.Enabled = true;
            determine_button.Enabled = true;
        }

        public void get_data(string url)
        {
            request = WebRequest.Create(url);
            request.Credentials = CredentialCache.DefaultCredentials;
            response = request.GetResponse();
            //Console.WriteLine(((HttpWebResponse)response).StatusDescription); 印出網頁狀態碼
            using (Stream dataStream = response.GetResponseStream())
            {
                // Open the stream using a StreamReader for easy access.
                StreamReader reader = new StreamReader(dataStream);
                // Read the content.
                string responseFromServer = reader.ReadToEnd();
                Thinkspeak result = JsonConvert.DeserializeObject<Thinkspeak>(responseFromServer);
                // Display the content.
                entry_id = result.entry_id;
                field1 = result.field1;
                field2 = result.field2;

                field3 = result.field3;
                field4 = result.field4;
            }
            response.Close();
        }

        public void get_field1(int id)
        {
            int count = id;
            entry_id = Convert.ToString(id);
            url = host + channel + "/feeds/" + entry_id + ".json?api_key=" + read_api_key;
            get_data(url);
            if (field1 == null)
                get_field1(count-1);
        }

        public void get_field2(int id)
        {
            int count = id;
            entry_id = Convert.ToString(id);
            url = host + channel + "/feeds/" + entry_id + ".json?api_key=" + read_api_key;
            get_data(url);
            if (field2 == null)
                get_field2(count - 1);
        }

        public void get_field3(int id)
        {
            int count = id;
            entry_id = Convert.ToString(id);
            url = host + channel + "/feeds/" + entry_id + ".json?api_key=" + read_api_key;
            get_data(url);
            if (field3 == null)
                get_field3(count - 1);
        }

        public void get_field4(int id)
        {
            int count = id;
            entry_id = Convert.ToString(id);
            url = host + channel + "/feeds/" + entry_id + ".json?api_key=" + read_api_key;
            get_data(url);
            if (field4 == null)
                get_field4(count - 1);
        }

        private void determine_button_Click(object sender, EventArgs e)
        {
            reset_button.Enabled = false;
            determine_button.Enabled = false;
            id = Int32.Parse(entry_id_textBox.Text);
            do
            {
                get_field1(id);
            } while (field1 == null);
            field1_textBox.Text = field1 + "℃";
            do
            {
                get_field2(id);
            } while (field2 == null);
            field2_textBox.Text = field2+"%";
            do
            {
                get_field3(id);
            } while (field3 == null);
            field3_textBox.Text = field3 + "℃";
            do
            {
                get_field4(id);
            } while (field4 == null);
            field4_textBox.Text = field4 + "%";
            reset_button.Enabled = true;
            determine_button.Enabled = true;
        }
    }

    public class Thinkspeak
    {
        public string entry_id { get; set; }
        public string field1 { get; set; }
        public string field2 { get; set; }
        public string field3 { get; set; }
        public string field4 { get; set; }
       
    }
}
