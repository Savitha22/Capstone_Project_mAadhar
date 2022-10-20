package capstone.exception;

public class AdminNotFoundException extends RuntimeException{

	public AdminNotFoundException(int id) {
		super("Admin with id " + id + " is not Found.Pls Give another id!!");
	}
}
