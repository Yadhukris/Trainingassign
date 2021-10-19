﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyTraining.Models;

namespace MyTraining.Migrations
{
    [DbContext(typeof(SampleDbContext))]
    [Migration("20211018134945_ghi")]
    partial class ghi
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyTraining.Models.Allocation", b =>
                {
                    b.Property<int>("Aid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Duration")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EndTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Enddate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StartTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Startdate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SuggestedTrainer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Techname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Aid");

                    b.ToTable("Allocations");
                });

            modelBuilder.Entity("MyTraining.Models.EmployeeRequest", b =>
                {
                    b.Property<int>("Rid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Empid")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ename")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberofPart")
                        .HasColumnType("int");

                    b.Property<string>("Startdate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SuggestedTrainer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Techname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Rid");

                    b.ToTable("Empreq");
                });

            modelBuilder.Entity("MyTraining.Models.ReportF", b =>
                {
                    b.Property<int>("Rid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Empid")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ename")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Enddate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberofPart")
                        .HasColumnType("int");

                    b.Property<string>("Startdate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SuggestedTrainer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Techname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TrainingMode")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Rid");

                    b.ToTable("ReportFs");
                });

            modelBuilder.Entity("MyTraining.Models.UserModel", b =>
                {
                    b.Property<string>("Empid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Ename")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Empid");

                    b.ToTable("UserModels");
                });

            modelBuilder.Entity("MyTraining.Models.allocationres", b =>
                {
                    b.Property<int>("Resid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Aid")
                        .HasColumnType("int");

                    b.Property<string>("Empid")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ename")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Resid");

                    b.ToTable("allocationres");
                });
#pragma warning restore 612, 618
        }
    }
}
