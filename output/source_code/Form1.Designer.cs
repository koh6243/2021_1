
namespace Thingspeak2
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.entry_id_textBox = new System.Windows.Forms.TextBox();
            this.field1_textBox = new System.Windows.Forms.TextBox();
            this.field2_textBox = new System.Windows.Forms.TextBox();
            this.field3_textBox = new System.Windows.Forms.TextBox();
            this.field4_textBox = new System.Windows.Forms.TextBox();
            this.reset_button = new System.Windows.Forms.Button();
            this.determine_button = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft JhengHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(210, 127);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(93, 20);
            this.label1.TabIndex = 0;
            this.label1.Text = "第幾筆資料:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft JhengHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(210, 163);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(77, 20);
            this.label2.TabIndex = 1;
            this.label2.Text = "冰箱溫度:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft JhengHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label3.Location = new System.Drawing.Point(210, 197);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(77, 20);
            this.label3.TabIndex = 2;
            this.label3.Text = "冰箱濕度:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft JhengHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label4.Location = new System.Drawing.Point(210, 232);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(77, 20);
            this.label4.TabIndex = 3;
            this.label4.Text = "環境溫度:";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft JhengHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label5.Location = new System.Drawing.Point(210, 264);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(77, 20);
            this.label5.TabIndex = 4;
            this.label5.Text = "環境濕度:";
            // 
            // entry_id_textBox
            // 
            this.entry_id_textBox.Location = new System.Drawing.Point(310, 123);
            this.entry_id_textBox.Name = "entry_id_textBox";
            this.entry_id_textBox.Size = new System.Drawing.Size(100, 23);
            this.entry_id_textBox.TabIndex = 5;
            // 
            // field1_textBox
            // 
            this.field1_textBox.Location = new System.Drawing.Point(310, 160);
            this.field1_textBox.Name = "field1_textBox";
            this.field1_textBox.Size = new System.Drawing.Size(100, 23);
            this.field1_textBox.TabIndex = 6;
            // 
            // field2_textBox
            // 
            this.field2_textBox.Location = new System.Drawing.Point(310, 198);
            this.field2_textBox.Name = "field2_textBox";
            this.field2_textBox.Size = new System.Drawing.Size(100, 23);
            this.field2_textBox.TabIndex = 7;
            // 
            // field3_textBox
            // 
            this.field3_textBox.Location = new System.Drawing.Point(310, 232);
            this.field3_textBox.Name = "field3_textBox";
            this.field3_textBox.Size = new System.Drawing.Size(100, 23);
            this.field3_textBox.TabIndex = 8;
            // 
            // field4_textBox
            // 
            this.field4_textBox.Location = new System.Drawing.Point(310, 265);
            this.field4_textBox.Name = "field4_textBox";
            this.field4_textBox.Size = new System.Drawing.Size(100, 23);
            this.field4_textBox.TabIndex = 9;
            // 
            // reset_button
            // 
            this.reset_button.Font = new System.Drawing.Font("Microsoft JhengHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.reset_button.Location = new System.Drawing.Point(497, 123);
            this.reset_button.Name = "reset_button";
            this.reset_button.Size = new System.Drawing.Size(168, 60);
            this.reset_button.TabIndex = 10;
            this.reset_button.Text = "回到最新一筆資料";
            this.reset_button.UseVisualStyleBackColor = true;
            this.reset_button.Click += new System.EventHandler(this.reset_button_Click);
            // 
            // determine_button
            // 
            this.determine_button.Font = new System.Drawing.Font("Microsoft JhengHei UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.determine_button.Location = new System.Drawing.Point(497, 197);
            this.determine_button.Name = "determine_button";
            this.determine_button.Size = new System.Drawing.Size(168, 58);
            this.determine_button.TabIndex = 11;
            this.determine_button.Text = "選擇到目前輸入的資料";
            this.determine_button.UseVisualStyleBackColor = true;
            this.determine_button.Click += new System.EventHandler(this.determine_button_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.determine_button);
            this.Controls.Add(this.reset_button);
            this.Controls.Add(this.field4_textBox);
            this.Controls.Add(this.field3_textBox);
            this.Controls.Add(this.field2_textBox);
            this.Controls.Add(this.field1_textBox);
            this.Controls.Add(this.entry_id_textBox);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "冰箱結霜感測";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox entry_id_textBox;
        private System.Windows.Forms.TextBox field1_textBox;
        private System.Windows.Forms.TextBox field2_textBox;
        private System.Windows.Forms.TextBox field3_textBox;
        private System.Windows.Forms.TextBox field4_textBox;
        private System.Windows.Forms.Button reset_button;
        private System.Windows.Forms.Button determine_button;
    }
}

