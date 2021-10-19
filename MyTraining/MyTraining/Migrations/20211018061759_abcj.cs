using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyTraining.Migrations
{
    public partial class abcj : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "allocationres",
                columns: table => new
                {
                    Resid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Aid = table.Column<int>(type: "int", nullable: false),
                    Empid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ename = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_allocationres", x => x.Resid);
                });

            migrationBuilder.CreateTable(
                name: "Allocations",
                columns: table => new
                {
                    Aid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Techname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SuggestedTrainer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Startdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Enddate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Allocations", x => x.Aid);
                });

            migrationBuilder.CreateTable(
                name: "Empreq",
                columns: table => new
                {
                    Rid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Empid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ename = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Techname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SuggestedTrainer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberofPart = table.Column<int>(type: "int", nullable: false),
                    Startdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empreq", x => x.Rid);
                });

            migrationBuilder.CreateTable(
                name: "ReportFs",
                columns: table => new
                {
                    Rid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Empid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ename = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Techname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SuggestedTrainer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberofPart = table.Column<int>(type: "int", nullable: false),
                    Startdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Enddate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TrainingMode = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportFs", x => x.Rid);
                });

            migrationBuilder.CreateTable(
                name: "UserModels",
                columns: table => new
                {
                    Empid = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Ename = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModels", x => x.Empid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "allocationres");

            migrationBuilder.DropTable(
                name: "Allocations");

            migrationBuilder.DropTable(
                name: "Empreq");

            migrationBuilder.DropTable(
                name: "ReportFs");

            migrationBuilder.DropTable(
                name: "UserModels");
        }
    }
}
