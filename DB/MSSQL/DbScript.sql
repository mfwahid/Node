USE [sslib]
GO
/****** Object:  Table [dbo].[books]    Script Date: 10/15/2019 9:59:32 AM ******/
DROP TABLE [dbo].[books]
GO
/****** Object:  User [smuser]    Script Date: 10/15/2019 9:59:32 AM ******/
DROP USER [smuser]
GO
USE [master]
GO
/****** Object:  Database [sslib]    Script Date: 10/15/2019 9:59:32 AM ******/
DROP DATABASE [sslib]
GO
/****** Object:  Database [sslib]    Script Date: 10/15/2019 9:59:32 AM ******/
CREATE DATABASE [sslib]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'books', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\books.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'books_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\books_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [sslib] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sslib].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [sslib] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [sslib] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [sslib] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [sslib] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [sslib] SET ARITHABORT OFF 
GO
ALTER DATABASE [sslib] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [sslib] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [sslib] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [sslib] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [sslib] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [sslib] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [sslib] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [sslib] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [sslib] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [sslib] SET  DISABLE_BROKER 
GO
ALTER DATABASE [sslib] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [sslib] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [sslib] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [sslib] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [sslib] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [sslib] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [sslib] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [sslib] SET RECOVERY FULL 
GO
ALTER DATABASE [sslib] SET  MULTI_USER 
GO
ALTER DATABASE [sslib] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [sslib] SET DB_CHAINING OFF 
GO
ALTER DATABASE [sslib] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [sslib] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [sslib] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'sslib', N'ON'
GO
ALTER DATABASE [sslib] SET QUERY_STORE = OFF
GO
USE [sslib]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [sslib]
GO
/****** Object:  User [smuser]    Script Date: 10/15/2019 9:59:33 AM ******/
CREATE USER [smuser] FOR LOGIN [smuser] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[books]    Script Date: 10/15/2019 9:59:33 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[books](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](255) NULL,
	[author] [varchar](255) NULL,
	[genre] [varchar](255) NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[books] ON 

INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (1, N'Ansible 3.0', N'Mohamed Safwan', N'Automation')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (2, N'Concourse', N'Aisha Sana', N'Dev Ops')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (3, N'Mastering Node Applications', N'Mohamed Safwan', N'Server Scripting')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (4, N'Learning Me', N'Abdul Waheed', N'Biography')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (5, N'Worst Human Behaviours', N'Abdul Waheed', N'Fiction')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (6, N'Space Shuttle', N'Mohamed Safwan', N'Astro Science')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (7, N'Drawing Basics', N'Aisha Sana', N'Kids Learning')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (8, N'Miserable', N'Abdul Waheed', N'Fiction')
INSERT [dbo].[books] ([id], [title], [author], [genre]) VALUES (9, N'You, Me, I', N'Abdul Waheed', N'Fiction')
SET IDENTITY_INSERT [dbo].[books] OFF
USE [master]
GO
ALTER DATABASE [sslib] SET  READ_WRITE 
GO
